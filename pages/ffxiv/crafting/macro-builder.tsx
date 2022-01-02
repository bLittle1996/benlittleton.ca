import MacroBuilderLayout from "../../../layouts/apps/macro-builder-layout";
import { NextPageComponent } from "../../../utils/types";

const MacroBuilderPage: NextPageComponent = () => {
  return <div>Hello</div>;
};

MacroBuilderPage.getLayout = MacroBuilderLayout;

export default MacroBuilderPage;
