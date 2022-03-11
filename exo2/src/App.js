import './App.css';
import {Layout, Menu} from 'antd';
import {Routes, Route, Link, useLocation} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import React, {useState} from "react";
import HomePage from "./pages/HomePage";
import {UserContext} from "./context/UserContext";

const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [state, setState] = useState({
    user: {}
  });
  const { pathname } = useLocation();

  const logout = () => {
    setState({user: {
        "connected": false,
      }
    });
  }

  const login = () => {
    setState({user: {
        "connected": true,
      }
    });
  }

  const value = {
    user: state.user,
    logoutUser: logout.bind(this),
    loginUser: login
  }

  return (
    <UserContext.Provider value={value}>
      <Layout hasSider>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" selectedKeys={[pathname]}>
            <Menu.Item key="/">
              <Link to="/">Home</Link>
            </Menu.Item>
            <UserContext.Consumer>
              {({user, logoutUser}) => {
                if (user.connected) {
                  return (
                    <Menu.Item key="/logout" onClick={logoutUser}>
                      Logout
                    </Menu.Item>
                  )
                } else {
                  return (
                    <Menu.Item key="/login">
                      <Link to="/login">Login</Link>
                    </Menu.Item>
                  )
                }
              }}
            </UserContext.Consumer>
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>

            <UserContext.Consumer>
              {({user, logoutUser, loginUser}) =>

                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<LoginPage login={loginUser.bind(this)}/>} />
                </Routes>
              }
            </UserContext.Consumer>
          </Content>
          <Footer style={{ textAlign: 'center' }}>SUPINFO - Matière de 3VRAR</Footer>
        </Layout>
      </Layout>
    </UserContext.Provider>
  );
}

export default App;
