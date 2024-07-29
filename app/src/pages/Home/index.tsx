/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react";
import Title from "../../components/Title";
import { AuthContext } from "../../context/AuthContext";
import Icon from "../../components/Icon";
import { useApi } from "../../services/api/useApi";
import TableList from "../../components/TableList";
import Button from "../../components/baseComponents/Button";
import * as S from "./styles";

const columns = [
  { field: "date", headerName: "Data" },
  { field: "clockIn", headerName: "Entrada" },
  { field: "clockOut", headerName: "Saída" },
  { field: "totalHours", headerName: "Horas trabalhadas" },
];

const Home: React.FC = () => {
  const [shifts, setShifts] = useState<any[] | null>(null);
  const { user } = useContext(AuthContext);
  const { userHitory } = useApi();

  const getShifts = async () => {
    const response = await userHitory();

    setShifts(response);
  };

  useEffect(() => {
    getShifts();
  }, []);

  return (
    <S.Container>
      <S.UserInfoContainer>
        <Title />
        <S.User>
          <span>{user?.email}</span>
          <Icon icon="user" size={32} />
        </S.User>
      </S.UserInfoContainer>
      <h2>00h 00m</h2>
      <Button type="button">Registrar entradas</Button>
      <TableList columns={columns} rows={shifts || []} />
    </S.Container>
  );
};

export default Home;
