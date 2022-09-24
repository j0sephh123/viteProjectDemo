import Button, {
  buttonBackgroundColors,
  buttonBorderRadiusses,
  buttonSizes,
  buttonVariants,
} from "./components/ButtonComponent";

function App() {
  return (
    <div className="App">
      <Button
        uppercase
        borderRadius={buttonBorderRadiusses["8px"]}
        variant={buttonVariants.outline}
      >
        8px
      </Button>
      <Button
        uppercase
        backgroundColor={buttonBackgroundColors.orange}
        borderRadius={buttonBorderRadiusses["4px"]}
        variant={buttonVariants.outline}
      >
        4px
      </Button>
      <Button
        uppercase
        backgroundColor={buttonBackgroundColors.red}
        variant={buttonVariants.outline}
        size={buttonSizes.large}
      >
        No Border radius
      </Button>
    </div>
  );
}

export default App;
