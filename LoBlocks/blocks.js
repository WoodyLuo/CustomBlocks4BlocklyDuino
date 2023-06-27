
Blockly.Blocks['set_mearm'] = {
	init: function() {
	  this.appendValueInput("basePin")
		  .setCheck("Number")
		  .appendField(Blockly.Msg["TEXT_SET_BASE_PIN"]);
	  this.appendValueInput("shoulderPin")
		  .setCheck("Number")
		  .appendField(Blockly.Msg["TEXT_SET_SHOULDER_PIN"]);
	  this.appendValueInput("elbowPin")
		  .setCheck("Number")
		  .appendField(Blockly.Msg["TEXT_SET_ELBOW_PIN"]);
	  this.appendValueInput("gripperPin")
		  .setCheck("Number")
		  .appendField(Blockly.Msg["TEXT_SET_GRIPPWR_PIN"]);
	  this.setInputsInline(true);
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(230);
   this.setTooltip(Blockly.Msg["TEXT_SET_MEARM_HELP"]);
   this.setHelpUrl(Blockly.Msg["TEXT_SET_MEARM_HELP_URL"]);
	}
};

Blockly.Blocks['ini_set_mearm'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField(Blockly.Msg["TEXT_INI_SET_MEARM_PIN"]);
	  this.appendValueInput("basePin")
		  .setCheck("Number")
		  .setAlign(Blockly.ALIGN_RIGHT)
		  .appendField(Blockly.Msg["TEXT_INI_SET_BASE_PIN"]);
	  this.appendValueInput("shoulderPin")
		  .setCheck("Number")
		  .setAlign(Blockly.ALIGN_RIGHT)
		  .appendField(Blockly.Msg["TEXT_INI_SET_SHOULDER_PIN"]);
	  this.appendValueInput("elbowPin")
		  .setCheck("Number")
		  .setAlign(Blockly.ALIGN_RIGHT)
		  .appendField(Blockly.Msg["TEXT_INI_SET_ELBOW_PIN"]);
	  this.appendValueInput("gripperPin")
		  .setCheck("Number")
		  .setAlign(Blockly.ALIGN_RIGHT)
		  .appendField(Blockly.Msg["TEXT_INI_SET_GRIPPWR_PIN"]);
	  this.appendDummyInput()
		  .appendField(Blockly.Msg["TEXT_INI_SET_MEARM_RANGE"]);
	  this.appendValueInput("xMin")
		  .setCheck("Number")
		  .setAlign(Blockly.ALIGN_RIGHT)
		  .appendField(Blockly.Msg["TEXT_INI_SET_X_MIN"]);
	  this.appendValueInput("xMax")
		  .setCheck("Number")
		  .setAlign(Blockly.ALIGN_RIGHT)
		  .appendField(Blockly.Msg["TEXT_INI_SET_X_MAX"]);
	  this.appendValueInput("yMin")
		  .setCheck("Number")
		  .setAlign(Blockly.ALIGN_RIGHT)
		  .appendField(Blockly.Msg["TEXT_INI_SET_Y_MIN"]);
	  this.appendValueInput("yMax")
		  .setCheck("Number")
		  .setAlign(Blockly.ALIGN_RIGHT)
		  .appendField(Blockly.Msg["TEXT_INI_SET_Y_MAX"]);
	  this.appendValueInput("zMin")
		  .setCheck("Number")
		  .setAlign(Blockly.ALIGN_RIGHT)
		  .appendField(Blockly.Msg["TEXT_INI_SET_Z_MIN"]);
	  this.appendValueInput("zMax")
		  .setCheck("Number")
		  .setAlign(Blockly.ALIGN_RIGHT)
		  .appendField(Blockly.Msg["TEXT_INI_SET_Z_MAX"]);
	  this.appendValueInput("gMin")
		  .setCheck("Number")
		  .setAlign(Blockly.ALIGN_RIGHT)
		  .appendField(Blockly.Msg["TEXT_INI_SET_G_MIN"]);
	  this.appendValueInput("gMax")
		  .setCheck("Number")
		  .setAlign(Blockly.ALIGN_RIGHT)
		  .appendField(Blockly.Msg["TEXT_INI_SET_G_MAX"]);
	  this.setInputsInline(false);
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(230);
   this.setTooltip(Blockly.Msg["TEXT_SET_MEARM_HELP"]);
   this.setHelpUrl(Blockly.Msg["TEXT_SET_MEARM_HELP_URL"]);
	}
};

Blockly.Blocks['get_mearm_angle'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField(Blockly.Msg["TEXT_GET_MEARM_ANGLE"])
		  .appendField(new Blockly.FieldDropdown([[Blockly.Msg["TEXT_INI_SET_BASE_PIN"],"angleX"], [Blockly.Msg["TEXT_INI_SET_SHOULDER_PIN"],"angleY"], [Blockly.Msg["TEXT_INI_SET_ELBOW_PIN"],"angleZ"], [Blockly.Msg["TEXT_INI_SET_GRIPPWR_PIN"],"angleG"]]), "selectedServo");
	  this.setInputsInline(true);
	  this.setOutput(true, null);
	  this.setColour(230);
   this.setTooltip(Blockly.Msg["TEXT_GET_MEARM_ANGLE_HELP"]);
   this.setHelpUrl(Blockly.Msg["TEXT_SET_MEARM_HELP_URL"]);
	}
};

Blockly.Blocks['set_mearm_angle'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField(Blockly.Msg["TEXT_SET_MEARM_ANGLE"])
		  .appendField(new Blockly.FieldDropdown([["Base","angleX"], ["Right-side Shoulder","angleY"], ["Left-side Elbow","angleZ"], ["Gripper","angleG"]]), "selectedServo");
	  this.appendValueInput("servoAngle")
		  .setCheck("Number");
	  this.setInputsInline(true);
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(230);
   this.setTooltip(Blockly.Msg["TEXT_SET_MEARM_ANGLE_HELP"]);
   this.setHelpUrl("https://github.com/WoodyLuo/meArm");
	}
};

Blockly.Blocks['move_mearm'] = {
	init: function() {
	  this.appendValueInput("angleX")
		  .setCheck("Number")
		  .appendField(Blockly.Msg["TEXT_MOVE_MEARM"]);
	  this.appendValueInput("angleY")
		  .setCheck("Number")
		  .appendField(Blockly.Msg["TEXT_SET_SHOULDER_PIN"]);
	  this.appendValueInput("angleZ")
		  .setCheck("Number")
		  .appendField(Blockly.Msg["TEXT_SET_ELBOW_PIN"]);
	  this.appendValueInput("angleG")
		  .setCheck("Number")
		  .appendField(Blockly.Msg["TEXT_SET_GRIPPWR_PIN"]);
	  this.setInputsInline(true);
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(230);
   this.setTooltip(Blockly.Msg["TEXT_MOVE_MEARM_HELP"]);
   this.setHelpUrl(Blockly.Msg["TEXT_SET_MEARM_HELP_URL"]);
	}
};

