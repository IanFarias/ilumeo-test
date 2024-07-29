/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react";
import Title from "../../components/Title";
import { AuthContext } from "../../context/AuthContext";
import Icon from "../../components/Icon";
import { useApi } from "../../services/api/useApi";
import TableList from "../../components/TableList";
import Button from "../../components/baseComponents/Button";
import { ActiveShift } from "../../services/api/dtos";
import { getTimer } from "../../utils/date";
import * as S from "./styles";

const columns = [
  { field: "date", headerName: "Data" },
  { field: "clockIn", headerName: "Entrada" },
  { field: "clockOut", headerName: "Saída" },
  { field: "totalHours", headerName: "Horas trabalhadas" },
];

const Home: React.FC = () => {
  const [active, setActive] = useState<ActiveShift | null>(null);
  const [timer, setTimer] = useState<string>("");
  const [shifts, setShifts] = useState<any[] | null>(null);
  const { user } = useContext(AuthContext);
  const { userHitory, activeShift, clockIn, clockOut } = useApi();

  const getShifts = async () => {
    const response = await userHitory();

    setShifts(response);
  };

  const getActiveShift = async () => {
    const response = await activeShift();

    setActive(response);
  };

  const handleAction = async () => {
    if (!active) {
      await clockIn();
      getShifts();
      getActiveShift();
      return;
    }

    if (active) {
      await clockOut(active?.id);
      setActive(null);
      getShifts();
    }
  };

  useEffect(() => {
    getShifts();
    getActiveShift();
  }, []);

  useEffect(() => {
    if (active) {
      const intervalId = setInterval(() => {
        setTimer(getTimer(active.clockIn));
      }, 100);

      return () => clearInterval(intervalId);
    }
  }, [active]);

  return (
    <S.Container>
      <S.UserInfoContainer>
        <Title />
        <S.User>
          <span>{user?.email}</span>
          <Icon icon="user" size={32} />
        </S.User>
      </S.UserInfoContainer>
      <S.DisplaySection>
        <h2>Hoje</h2>

        <S.Display>{active ? timer : "00h 00m"}</S.Display>
      </S.DisplaySection>
      {!active && (
        <Button type="button" onClick={handleAction}>
          Registrar entradas
        </Button>
      )}

      {active && (
        <Button type="button" onClick={handleAction}>
          Registrar saída
        </Button>
      )}
      <S.ShiftsSection>
        <h2>Histórico</h2>
        <S.TableContainer>
          <TableList columns={columns} rows={shifts || []} />
        </S.TableContainer>
      </S.ShiftsSection>
    </S.Container>
  );
};

export default Home;
