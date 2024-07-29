import { useContext, useState } from "react";
import Button from "../../components/baseComponents/Button";
import Input from "../../components/baseComponents/Input";
import Title from "../../components/Title";
import { useNavigate } from "react-router-dom";
import { SCREEN_PATHS } from "../../constants/paths";
import { AuthContext } from "../../context/AuthContext";
import * as S from "./styles";

const Login: React.FC = () => {
  const [loginError, setLoginError] = useState(false);
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });
  const { login, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = ({ target }: { target: HTMLInputElement }) => {
    const { value, name } = target;

    setInputValues((currentValues) => ({
      ...currentValues,
      [name]: value.trim(),
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await login(inputValues);
      console.log(user);

      navigate(SCREEN_PATHS.home);
    } catch (e) {
      setLoginError(true);
    }
  };

  return (
    <S.Container>
      <Title />
      <S.Form onSubmit={handleSubmit}>
        <S.InputContainer>
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            name="email"
            type="email"
            value={inputValues.email}
            onChange={handleChange}
            required
          />
        </S.InputContainer>
        <S.InputContainer>
          <label htmlFor="password">Senha</label>
          <Input
            id="password"
            name="password"
            type="password"
            value={inputValues.password}
            onChange={handleChange}
            required
          />
        </S.InputContainer>
        {loginError && (
          <span style={{ color: "red", textAlign: "center" }}>
            Email ou Senha Inválidos.
          </span>
        )}
        <Button type="submit">Efetuar Login</Button>
      </S.Form>
    </S.Container>
  );
};

export default Login;
