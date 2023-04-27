// import ColorPicker from "./ColorPicker/ColorPicker";
// import Counter from "./Counter/Counter";
// import SignupForm from "./SignupForm/SignupForm";
import Clock from "./Clock/Clock";

export const App = () => {

  // const colorPickerOptions = [
  //   { label: 'red', color: '#F44336' },
  //   { label: 'green', color: '#4CAF50' },
  //   { label: 'blue', color: '#2196F3' },
  //   { label: 'grey', color: '#607D8B' },
  //   { label: 'pink', color: '#E91E63' },
  //   { label: 'indigo', color: '#3F51B5' },
  // ];

  return (
    <div 
      style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 40,
      color: '#010101'
    }}>
        {/* <SignupForm/> */}
        {/* <ColorPicker options={colorPickerOptions}/> */}
        {/* <Counter /> */}
        <Clock />
    </div>
  );
};
