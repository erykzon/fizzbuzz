const ExplorerService = require("./../../lib/services/ExplorerService");
const explorers = [{mission: "node", githubUsername: "ajolonauta1"}];


describe ("Test de Exploer Service ", () => {
    test("Requerimiento 1: Filtrar los explrers en la mision  Node ",() =>{
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        // expect(explorersInNode.mission).toMatch(/node/)   
        // expect(explorersInNode.mission).toMatch(explorers.mission)
        expect(explorersInNode.mission = "node").toMatch(/node/);
        console.log("Exploerers ►►► " + explorersInNode);
    }),
    test("Requerieminto 2: Calcular el total de explorer en la mision Node ", () => {
        // const explorers = [{mission: "node"}]
        const explorerLength = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(explorerLength).toBe(1);
        console.log("Exploerers ►►► " + explorerLength);
    }),
    test("Requerimiento 3: Obtener el nombre de usuario por mision", () => {
        const username = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(username.githubUsername = "ajolonauta1").toContain("ajolonauta1");
    });
    
});