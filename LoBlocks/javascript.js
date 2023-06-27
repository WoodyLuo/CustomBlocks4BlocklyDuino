Blockly.Arduino['set_mearm'] = function(block) {
  //Blockly.Arduino.definitions_['name'] = '//definitions_';
  //Blockly.Arduino.setups_['name'] = '//setups_';
  //Blockly.Arduino.functions_['name'] = 'String blockly() {\n  return "Hello World";\n}';

  var value_basePin = Blockly.Arduino.valueToCode(block, 'basePin', Blockly.Arduino.ORDER_ATOMIC);
  var value_shoulderPin = Blockly.Arduino.valueToCode(block, 'shoulderPin', Blockly.Arduino.ORDER_ATOMIC);
  var value_elbowPin = Blockly.Arduino.valueToCode(block, 'elbowPin', Blockly.Arduino.ORDER_ATOMIC);
  var value_gripperPin = Blockly.Arduino.valueToCode(block, 'gripperPin', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.definitions_.define_mearm='#include "meArm.h';
  Blockly.Arduino.definitions_.ini_mearm='meArm arm;';
  Blockly.Arduino.setups_.define_mearm = 'arm.begin(%1, %2, %3, %4);\n'.replace('%1',value_basePin).replace('%2', value_shoulderPin).replace('%3',value_elbowPin).replace('%4',value_gripperPin);
  
  var code = '';
  return code;
};

Blockly.Arduino['ini_set_mearm'] = function(block) {
  //Blockly.Arduino.definitions_['name'] = '//definitions_';
  //Blockly.Arduino.setups_['name'] = '//setups_';
  //Blockly.Arduino.functions_['name'] = 'String blockly() {\n  return "Hello World";\n}';

  var value_basePin = Blockly.Arduino.valueToCode(block, 'basePin', Blockly.Arduino.ORDER_ATOMIC);
  var value_shoulderPin = Blockly.Arduino.valueToCode(block, 'shoulderPin', Blockly.Arduino.ORDER_ATOMIC);
  var value_elbowPin = Blockly.Arduino.valueToCode(block, 'elbowPin', Blockly.Arduino.ORDER_ATOMIC);
  var value_gripperPin = Blockly.Arduino.valueToCode(block, 'gripperPin', Blockly.Arduino.ORDER_ATOMIC);
  var value_xMin = Blockly.Arduino.valueToCode(block, 'xMin', Blockly.Arduino.ORDER_ATOMIC);
  var value_xMax = Blockly.Arduino.valueToCode(block, 'xMax', Blockly.Arduino.ORDER_ATOMIC);
  var value_yMin = Blockly.Arduino.valueToCode(block, 'yMin', Blockly.Arduino.ORDER_ATOMIC);
  var value_yMax = Blockly.Arduino.valueToCode(block, 'yMax', Blockly.Arduino.ORDER_ATOMIC);
  var value_zMin = Blockly.Arduino.valueToCode(block, 'zMin', Blockly.Arduino.ORDER_ATOMIC);
  var value_zMax = Blockly.Arduino.valueToCode(block, 'zMax', Blockly.Arduino.ORDER_ATOMIC);
  var value_gMin = Blockly.Arduino.valueToCode(block, 'gMin', Blockly.Arduino.ORDER_ATOMIC);
  var value_gMax = Blockly.Arduino.valueToCode(block, 'gMax', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.definitions_.define_mearm='#include "meArm.h';
  Blockly.Arduino.definitions_.ini_mearm='meArm arm(%1, %2, %3, %4, %5, %6, %7, %8);'.replace('%1',value_xMin).replace('%2',value_xMax).replace('%3',value_yMin).replace('%4',value_yMax).replace('%5',value_zMin).replace('%6',value_zMax).replace('%7',value_gMin).replace('%8',value_gMax);
  Blockly.Arduino.setups_.define_mearm = 'arm.begin(%1, %2, %3, %4);\n'.replace('%1',value_basePin).replace('%2', value_shoulderPin).replace('%3',value_elbowPin).replace('%4',value_gripperPin);
  
  var code = '';
  return code;
};

Blockly.Arduino['get_mearm_angle'] = function(block) {
  //Blockly.Arduino.definitions_['name'] = '//definitions_';
  //Blockly.Arduino.setups_['name'] = '//setups_';
  //Blockly.Arduino.functions_['name'] = 'String blockly() {\n  return "Hello World";\n}';

  var a = this.getFieldValue("selectedServo");
  if(a==="angleX"){
    a = "arm.getX()";
  }else if(a==="angleY"){
    a = "arm.getY()";
  }else if(a==="angleZ"){
    a = "arm.getZ()";
  }else if(a==="angleG"){
    a = "arm.getG()";
  }
  
  var code = a;
  return code;
};

Blockly.Arduino['set_mearm_angle'] = function(block) {
  //Blockly.Arduino.definitions_['name'] = '//definitions_';
  //Blockly.Arduino.setups_['name'] = '//setups_';
  //Blockly.Arduino.functions_['name'] = 'String blockly() {\n  return "Hello World";\n}';

  var a = this.getFieldValue("selectedServo");
  if(a==="angleX"){
    a = "arm.setAngleX(%1);\n";
  }else if(a==="angleY"){
    a = "arm.setAngleY(%1);\n";
  }else if(a==="angleZ"){
    a = "arm.setAngleZ(%1);\n";
  }else if(a==="angleG"){
    a = "arm.setAngleG(%1);\n";
  }
  var value_servoAngle = Blockly.Arduino.valueToCode(block, 'servoAngle', Blockly.Arduino.ORDER_ATOMIC);
  var code = a.replace('%1',value_servoAngle);
  return code;
};

Blockly.Arduino['move_mearm'] = function(block) {
  //Blockly.Arduino.definitions_['name'] = '//definitions_';
  //Blockly.Arduino.setups_['name'] = '//setups_';
  //Blockly.Arduino.functions_['name'] = 'String blockly() {\n  return "Hello World";\n}';

  var value_angleX = Blockly.Arduino.valueToCode(block, 'angleX', Blockly.Arduino.ORDER_ATOMIC);
  var value_angleY = Blockly.Arduino.valueToCode(block, 'angleY', Blockly.Arduino.ORDER_ATOMIC);
  var value_angleZ = Blockly.Arduino.valueToCode(block, 'angleZ', Blockly.Arduino.ORDER_ATOMIC);
  var value_angleG = Blockly.Arduino.valueToCode(block, 'angleG', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 'arm.goDirectlyTo(%1, %2, %3, %4);\n'.replace('%1',value_angleX).replace('%2', value_angleY).replace('%3',value_angleZ).replace('%4',value_angleG);
  return code;
};