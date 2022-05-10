import { QuestionsRepositoryInMemory } from "../../repositories/in-memory/QuestionsRepositoryInMemory";
import { CreateQuestionUseCase } from "./CreateQuestionUseCase";

let createQuestionUseCase: CreateQuestionUseCase;
let questionsRepositoryInMemory: QuestionsRepositoryInMemory;

describe("Create Question", () => {
  beforeEach(() => {
    questionsRepositoryInMemory = new QuestionsRepositoryInMemory();
    createQuestionUseCase = new CreateQuestionUseCase(
      questionsRepositoryInMemory
    );
  });

  it("should be able to create a new question", async () => {
    await createQuestionUseCase.execute({
      title: "title",
      content: "contents",
      category_id: "category",
      author_id: "jojo"
    });
  });
});
