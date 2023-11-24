import { useState } from "react";
import { View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const ToDoElement = ({ todoItem, handleCheck }) => {
  const { description, isChecked } = todoItem;
  const [checked, setChecked] = useState(isChecked);

  const onPress = () => {
    handleCheck(todoItem);
    setChecked(!checked);
  };
  
  return (
    <View>
      <BouncyCheckbox
        style={{ marginTop: 16 }}
        isChecked={checked}
        text={description}
        disableBuiltInState
        onPress={onPress}
      />
    </View>
  );
};

export default ToDoElement;
