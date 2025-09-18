//Importanto componente a ser testado
import QuestItem from "./QuestItem";

//render -> DOM virtual para testes.
//screen -> Facilita buscar textos, botões, inputs.
//fireEvent -> simula eventos do usuário
import {render, screen, fireEvent } from "@testing-library/react";

//test -> define um caso de teste.
//describe -> organiza em blocos descritivos
//expect => permite fazer verificações
import { test, describe, expect } from "@jest/globals";

//Adiciona funções extras
import '@testing-library/jest-dom';

//Created Quest
const createdQuest = {
    id: 1,
    title: "Falar com o pai",
    status: "aberto",
    created_at: new Date(Date.now()).toUTCString(),
}

//Concluded Quest
const concludedQuest = {
    id: 2,
    title: "Falar com a mãe",
    status: "concluído",
    created_at: new Date(Date.now()).toUTCString(),
}

//describe -> agrupa vários testes
//Suíte
describe("Testando item", () => {
    //test -> define um teste específico
    test('Teste de matemática', () => {
        //expect -> hipóteses
        expect(2 + 2).toBe(4);
    });

    test("Verificar se texto contém palavra", () => {
        const frase = "Programar é divertido";
        expect(frase).toContain("divertido");
    });

    test("Verificar tamanho de array", () => {
        const frutas = ["maça", "banana", "uva"];
        expect(frutas.length).toBe(3);
    });
})

//describe -> agrupa vários testes relacionados, facilitando a organização.
describe("testando item2", () => {

    //test -> define um caso de teste individual que será executado.
    test("testando se está visível", () => {

        //render -> função que renderiza o componente em um DOM virtual para testes.
        render(<QuestItem quest={createdQuest} />);

        //expect -> usada para fazer as hipóteses.
        expect(screen.getByTestId("questItem")).toBeVisible();
        expect(screen.getByTestId("title").textContent).toBe("Falar com o pai")
    })
})