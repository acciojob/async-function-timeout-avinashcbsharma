document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('myForm');
  const textInput = document.getElementById('text');
  const delayInput = document.getElementById('delay');
  const outputDiv = document.getElementById('output');

  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent form submission

    const text = textInput.value;
    const delay = parseInt(delayInput.value);

    if (!text || !delay || isNaN(delay)) {
      outputDiv.textContent = 'Please provide valid text and delay.';
      return;
    }

    outputDiv.textContent = ''; // Clear previous output

    try {
      await delayFunction(delay);
      outputDiv.textContent = text;
    } catch (error) {
      console.error(error);
    }
  });

  function delayFunction(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
});
