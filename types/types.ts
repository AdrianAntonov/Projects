type TData = {
  categories: string;
  difficulty: string;
};

const enum EData {
  arts_and_literature = 'arts_and_literature',
  film_and_tv = 'film_and_tv',
  food_and_drink = 'food_and_drink',
  general_knowledge = 'general_knowledge',
  geography = 'geography',
  history = 'history',
  music = 'music',
  science = 'science',
  society_and_culture = 'society_and_culture',
  sport_and_leisure = 'sport_and_leisure',
}
export type QuestionCardType = {
  correctAnswer: string;
  incorrectAnswers: string[];
  question: string;
  id: number;
};
