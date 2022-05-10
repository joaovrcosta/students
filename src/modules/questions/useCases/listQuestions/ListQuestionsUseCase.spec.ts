// import { QuestionsRepositoryInMemory } from "../../repositories/in-memory/QuestionsRepositoryInMemory";
// import { ListQuestionsUseCase } from "./ListQuestionsUseCase";

// let listQuestionsUseCase: ListQuestionsUseCase;
// let questionsRepositoryInMemory: QuestionsRepositoryInMemory;

// describe("List Questions", () => {
//   beforeEach(() => {
//     questionsRepositoryInMemory = new QuestionsRepositoryInMemory();
//     listQuestionsUseCase = new ListQuestionsUseCase(
//       questionsRepositoryInMemory
//     );
//   });

//   // it("should be able to list all available questions", async () => {
//   //   const question = await questionsRepositoryInMemory.create({
//   //     title: "O que é cloud computing",
//   //     contents: "Por favor me expliquem o que é cloud",
//   //     category: "Tecnologia",
//   //   });

//   //   const questions = await listQuestionsUseCase.execute();
//   // });

//   it("should be able to list all questions by title", async () => {
//     const question = await questionsRepositoryInMemory.create({
//       title: "O que é cloud computing test",
//       contents: "Por favor me expliquem o que é cloud",
//       category: "Tecnologia",
//     });

//     const questions = await listQuestionsUseCase.execute({
//       title: "O que é cloud computing test",
//     });

//     expect(questions).toEqual([question]);
//   });
// });
