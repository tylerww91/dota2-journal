export function renderHeroes(hero) {
    const li = document.createElement('li');

    const img = document.createElement('img');
    img.src = '/assets/placeholder-image.png';

    const p = document.createElement('p');
    p.textContent = hero;

    li.append(p, img);

    return li;
}
