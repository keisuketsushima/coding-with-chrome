/**
 * @fileoverview Phaser Blocks for Blockly.
 *
 * @license Copyright 2017 The Coding with Chrome Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author mbordihn@google.com (Markus Bordihn)
 */


/**
 * Phaser input section.
 */
Blockly.Blocks['phaser_input'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.BlocksTemplate.point())
      .appendField(i18t('on input'));
    this.appendStatementInput('CODE')
      .appendField(i18t('do'))
      .setAlign(Blockly.ALIGN_CENTRE)
      .setCheck(['Input']);
    this.setPreviousStatement(true, 'Update');
    this.setNextStatement(true, 'Update');
    this.setColour(135);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


/**
 * Add keyboard cursor keys.
 */
Blockly.Blocks['phaser_input_keyboard_cursor_keys_add'] = {
  init: function() {
    this.appendValueInput('variable')
        .appendField(Blockly.BlocksTemplate.addCircle())
        .appendField(i18t('define'));
    this.appendDummyInput()
        .appendField(i18t('as capture keyboard cursors keys'));
    this.setPreviousStatement(true, 'Create');
    this.setNextStatement(true, 'Create');
    this.setColour(135);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


/**
 * Add keyboard spacebar.
 */
Blockly.Blocks['phaser_input_keyboard_spacebar_add'] = {
  init: function() {
    this.appendValueInput('variable')
        .appendField(Blockly.BlocksTemplate.addCircle())
        .appendField(i18t('define'));
    this.appendDummyInput()
        .appendField(i18t('as capture keyboard spacebar'));
    this.setPreviousStatement(true, 'Create');
    this.setNextStatement(true, 'Create');
    this.setColour(135);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


/**
 * Add keyboard key.
 */
Blockly.Blocks['phaser_input_keyboard_key_add'] = {
  init: function() {
    this.appendValueInput('variable')
        .appendField(Blockly.BlocksTemplate.addCircle())
        .appendField(i18t('define'));
    this.appendDummyInput()
        .appendField(i18t('as capture keyboard key'))
        .appendField(new Blockly.FieldDropdown([
          [i18t('shift key'), 'Phaser.KeyCode.SHIFT'],
          [i18t('control key'), 'Phaser.KeyCode.CONTROL'],
          [i18t('spacebar'), 'Phaser.KeyCode.SPACEBAR'],
          ['w', 'Phaser.KeyCode.W'],
          ['a', 'Phaser.KeyCode.A'],
          ['s', 'Phaser.KeyCode.S'],
          ['d', 'Phaser.KeyCode.D']
        ]), 'keycode');
    this.setPreviousStatement(true, 'Create');
    this.setNextStatement(true, 'Create');
    this.setColour(135);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


/**
 * Add mouse keys.
 */
Blockly.Blocks['phaser_input_mouse_keys_add'] = {
  init: function() {
    this.appendValueInput('variable')
        .appendField(Blockly.BlocksTemplate.addCircle())
        .appendField(i18t('define'));
    this.appendDummyInput()
        .appendField(i18t('as capture mouse keys'));
    this.setPreviousStatement(true, 'Create');
    this.setNextStatement(true, 'Create');
    this.setColour(135);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


/**
 * Keyboard cursor is pressed.
 */
Blockly.Blocks['phaser_input_keyboard_cursor_is_pressed'] = {
  init: function() {
    this.appendValueInput('cursors')
        .setCheck(null);
    this.appendDummyInput()
        .appendField(i18t('is pressed'))
        .appendField(new Blockly.FieldDropdown([
          [i18t('up'), 'up.isDown'],
          [i18t('down'), 'down.isDown'],
          [i18t('left'), 'left.isDown'],
          [i18t('right'), 'right.isDown'],
          [i18t('key pressed'), 'isDown']
        ]), 'direction');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(135);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


/**
 * Keyboard key is pressed.
 */
Blockly.Blocks['phaser_input_keyboard_key_is_pressed'] = {
  init: function() {
    this.appendValueInput('key')
        .setCheck(null);
    this.appendDummyInput()
        .appendField(i18t('is pressed'));
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(135);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


/**
 * Mouse key is pressed.
 */
Blockly.Blocks['phaser_input_mouse_key_is_pressed'] = {
  init: function() {
    this.appendValueInput('mouse')
        .setCheck(null);
    this.appendDummyInput()
        .appendField(i18t('is pressed'))
        .appendField(new Blockly.FieldDropdown([
          [i18t('left'), 'leftButton.isDown'],
          [i18t('right'), 'rightButton.isDown'],
          [i18t('all'), 'isDown']
        ]), 'direction');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(135);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
