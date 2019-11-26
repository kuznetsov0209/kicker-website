import React from "react";
import format from "date-fns/format";

import screenshot from "/src/assets/images/screenshot-2019-01-09-at-15-25-05.png";
import screenshot2x from "/src/assets/images/screenshot-2019-01-09-at-15-25-05@2x.png";
import screenshot3x from "/src/assets/images/screenshot-2019-01-09-at-15-25-05@3x.png";
import groupImage from "/src/assets/images/group-10.png";
import groupImage2x from "/src/assets/images/group-10@2x.png";
import groupImage3x from "/src/assets/images/group-10@3x.png";
import { withAppContext } from "/src/context/app";
import Button from "/src/components/Button";
import Label from "/src/components/Label";
import { GOOGLE_AUTH_URL } from "/src/services/backend";

import RegisterTeam from "./RegisterTeam";
import RegisteredTeam from "./RegisteredTeam";
import TournamentStats from "./TournamentStats";
import TournamentUserStats from "./TournamentUserStats";
import TournamentGames from "./TournamentGames";
import TournamentRegisteredTeams from "./TournamentRegisteredTeams";
import {
  Main,
  Title,
  SubTitle,
  Text,
  RegistrationCase,
  Link,
  StepNumber,
  Step,
  Steps,
  Footer,
  LeaderboardImage,
  Paragraph,
  RulesImage,
  StepText
} from "./Tournaments.styles";

class Tournaments extends React.Component {
  componentDidMount() {
    this.props.loadTournamentData();
  }

  get isTournamentStarted() {
    return (this.props.tournamentGames || []).length > 0;
  }

  renderRegistrationState() {
    const { user, team } = this.props;
    return (
      <>
        <RegistrationCase>
          {user ? (
            team ? (
              <RegisteredTeam />
            ) : (
              <RegisterTeam />
            )
          ) : (
            <Link
              color="primary"
              variant="contained"
              size="large"
              href={GOOGLE_AUTH_URL}
            >
              Войти и заявить команду
            </Link>
          )}
        </RegistrationCase>
        <TournamentRegisteredTeams />
      </>
    );
  }

  renderRegistrationStateFooter() {
    const { user, team } = this.props;
    return (
      <Footer>
        {!user && (
          <Link
            color="primary"
            variant="contained"
            size="large"
            href={GOOGLE_AUTH_URL}
          >
            Войти и заявить команду
          </Link>
        )}
        {user && !team && (
          <Button
            color="primary"
            variant="contained"
            size="large"
            onClick={() => window.scrollTo(0, 0)}
          >
            Заявить команду
          </Button>
        )}
      </Footer>
    );
  }

  renderTournamentStats() {
    const { tournamentStats, tournamentGames } = this.props;
    return (
      <>
        <TournamentStats />
        <TournamentUserStats />
        <TournamentGames />
      </>
    );
  }

  render() {
    const { tournament, tournamentStats } = this.props;

    if (!tournament) {
      return null;
    }

    return (
      <>
        <Main>
          <SubTitle>
            {format(tournament.startDate, "DD MMM")}
            {" — "}
            {format(tournament.endDate, "DD MMM YYYY")}
          </SubTitle>
          <Title>{tournament.title}</Title>
        </Main>
        {this.isTournamentStarted
          ? this.renderTournamentStats()
          : this.renderRegistrationState()}

        <Paragraph>
          <Label>Как проходит турнир?</Label>
          <Steps>
            <Step>
              <StepNumber>1</StepNumber>
              <div>
                <StepText>Регистрация участников</StepText>
              </div>
            </Step>
            <Step>
              <StepNumber>2</StepNumber>
              <div>
                <StepText>Проведение турнира</StepText>
              </div>
            </Step>
            <Step>
              <StepNumber>3</StepNumber>
              <div>
                <StepText>Объявление победителя</StepText>
              </div>
            </Step>
          </Steps>
          <Text>
            В Меркури проводится турнир по кикеру, в котором могут участвовать
            все сотрудники компании. Для участия необходимо зарегистрировать
            команду из двух человек. Когда турнир начнется – зарегистрировать
            команду будет невозможно.
          </Text>
        </Paragraph>

        <Paragraph>
          <Label>Регламент турнира</Label>
          <RulesImage
            src={groupImage}
            srcSet={`${groupImage2x} 2x, ${groupImage3x} 3x`}
            alt="Rules"
          />
          <br />
          <Text>
            <a
              href="https://docs.google.com/document/d/1Cegjf6UinYJsmF7213crxUTqTzSm03GlecMoXsgsgLE/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              Подробный регламент турнира (гуглодока)
            </a>
          </Text>
        </Paragraph>

        <Paragraph>
          <Label>Как определяется команда-победитель?</Label>
          <LeaderboardImage
            src={screenshot}
            srcSet={`${screenshot2x} 2x, ${screenshot3x} 3x`}
            alt="Leaderboard"
          />
          <Text>
            Таблица сортируется по количеству побед (очков). Если у двух команд
            на момент завершения турнира число побед одинаково, то выше ставится
            победившая при личной встрече между этими двумя командами. <br />
            <br />
            При совпадении числа побед у 3-х и более команд и невозможности их
            сортировки по личным встречам на положение влияет коэффициент
            забитых голов за матч (отношение общего числа забитых голов к
            количеству матчей). <br />
            <br />
            Команды, занявшие первое и второе места в турнире, переходят в
            <b>Гранд-Финал</b>. Время и место Гранд-Финала назначает организатор
            турнира с учетом интересов обеих команд и удобства зрителей. <br />
            <br />
            Гранд-Финал проходит в формате <b>«Best of 5»</b>: играется
            необходимое количество матчей, пока у одной из команд не будет 3
            победы (т.е. возможны результаты 3:0, 3:1 или 3:2). В качестве
            зрителей обязательно приглашаются все участники турнира и болельщики
            команд.
          </Text>
        </Paragraph>

        <Label>Что получает победитель?</Label>
        <Text>
          Победившие в турнире получают переходящий суперкрутой кубок (нет) и
          всеобщий почет (может быть).
        </Text>

        {this.isTournamentStarted
          ? undefined
          : this.renderRegistrationStateFooter()}
      </>
    );
  }
}

export default withAppContext(Tournaments);
