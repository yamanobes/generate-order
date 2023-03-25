const instructionsTextarea = document.getElementById('instructions');
const constraintsTextarea = document.getElementById('constraints');
const specificationsTextarea = document.getElementById('specifications');
const combineButton = document.getElementById('combine');
const resultDiv = document.getElementById('result');

combineButton.addEventListener('click', () => {
  const instructionsTitle = '# 命令書\n';
  const constraintsTitle = '# 制約条件\n- ';
  const specificationsTitle = '# 仕様\n- ';
  const instructions = instructionsTitle + instructionsTextarea.value + '\n';
  const constraints = constraintsTitle + constraintsTextarea.value.split('\n').join('\n- ') + '\n';
  const specifications = specificationsTitle + specificationsTextarea.value.split('\n').join('\n- ') + '\n';
  const combinedText = instructions + constraints + specifications;
  resultDiv.textContent = combinedText;
  navigator.clipboard.writeText(combinedText);
});
