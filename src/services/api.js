import { request } from "/src/services/backend";

export const fetchUser = () => {
  return request("/api/me").then(data => data.data);
};

export const fetchUsers = () => {
  return request("/api/users").then(data => data.users);
};

export const fetchTournament = (id = "last") => {
  return request(`/api/tournaments/${id}`).then(data => data.tournament);
};

export const fetchTournamentGames = ({ tournamentId }) => {
  return request(`/api/tournaments/${tournamentId}/games-results`).then(
    data => data.gamesResults
  );
};

export const fetchTournamentStats = ({ tournamentId }) => {
  return request(`/api/tournaments/${tournamentId}/stats`);
};

export const fetchTeam = ({ tournamentId }) => {
  return request(`/api/tournaments/${tournamentId}/team`).then(
    data => data.team
  );
};

export const createTeam = async ({ player2Id, name }) => {
  return request("/api/teams", {
    method: "post",
    body: JSON.stringify({ player2Id, name })
  });
};

export const registerTeam = async ({ tournamentId, teamId }) => {
  await request(`/api/tournaments/${tournamentId}/teams`, {
    method: "post",
    body: JSON.stringify({
      tournamentId,
      teamId
    })
  });
};

export const unregisterTeam = async ({ tournamentId, teamId }) => {
  return request(`/api/tournaments/${tournamentId}/teams`, {
    method: "delete",
    body: JSON.stringify({ tournamentId, teamId })
  });
};
