import { ChoiceView } from "./ChoiceView.jsx";
import { NumberView } from "./NumberView.jsx";
import { OrderView } from "./OrderView.jsx";
import { PairsView } from "./PairsView.jsx";

// `solution` is shown after a wrong answer; the other types already reveal it in their own view.
export const questionTypes = {
  choice: { View: ChoiceView, solution: null },
  number: { View: NumberView, solution: (q) => q.answer },
  order: { View: OrderView, solution: null },
  pairs: { View: PairsView, solution: null },
};
