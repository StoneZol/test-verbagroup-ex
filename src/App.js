import './App.css';
import { connect } from 'react-redux';
import TodosPage from './pages/TodosPage';
import AuthPage from './pages/AuthPage';
import {Route, Routes, Navigate} from "react-router-dom";
import React, { Component } from 'react';

class App extends Component {
  render() {
    const { auth } = this.props;

    // Проверяем состояние auth и перенаправляем на нужную страницу
    if (auth) {
      return (
        <Routes>
          <Route path="/" element={<Navigate to="/todos" replace />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/auth" element={<Navigate to="/todos" replace />} /> {/* Если авторизован, перенаправляем на /todos */}
        </Routes>
      );
    } else {
      return (
        <Routes>
          <Route path="/" element={<Navigate to="/auth" replace />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/todos" element={<Navigate to="/auth" replace />} /> {/* Если не авторизован, перенаправляем на /auth */}
        </Routes>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth.auth,
});

export default connect(mapStateToProps)(App);


// function App() {
//   return (
//     <div className="App">
//       <AuthPage/>
//     </div>
//   );
// }

// export default App;
