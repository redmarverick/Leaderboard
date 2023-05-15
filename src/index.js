document.addEventListener('DOMContentLoaded', () => {
  const refreshBtn = document.getElementById('refreshBtn');
  const scoresList = document.getElementById('scoresList');
  const scoreForm = document.getElementById('scoreForm');
  const inputName = document.getElementById('inputName');
  const inputScore = document.getElementById('inputScore');

  const fetchScores = async () => {
    try {
      const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/baseball/scores/');
      const data = await response.json();
      const scores = data.result;
      scoresList.innerHTML = '';

      scores.forEach((score) => {
        const listItem = document.createElement('li');
        listItem.classList.add('flex', 'items-center', 'mb-2', 'bg-gray-800');

        const nameSpan = document.createElement('span');
        nameSpan.classList.add('mr-2');
        nameSpan.textContent = `${score.user}: `;
        listItem.appendChild(nameSpan);

        const scoreSpan = document.createElement('span');
        scoreSpan.classList.add('bg-gray-800', 'text-gray-200', 'py-1', 'px-2', 'rounded');
        scoreSpan.textContent = score.score;
        listItem.appendChild(scoreSpan);

        scoresList.appendChild(listItem);
      });
    } catch (error) {
      alert('Error fetching scores:', error);
    }
  };

  refreshBtn.addEventListener('click', fetchScores);

  scoreForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = inputName.value;
    const score = inputScore.value;

    try {
      const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/baseball/scores/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: name,
          score: parseInt(score, 10),
        }),
      });
      const data = await response.json();

      if (response.ok) {
        inputName.value = '';
        inputScore.value = '';
        fetchScores();
      } else {
        alert('Failed to add score:', data.error);
      }
    } catch (error) {
      alert('Error adding score:', error);
    }
  });

  fetchScores();
});
