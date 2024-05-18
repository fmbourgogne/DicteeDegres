body {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

.title {
    font-size: 6vw;
    margin: 5vw 0;
}

.notes-display {
    width: 90vw;
    height: 30vh;
    border: 1px solid black;
    position: relative;
    overflow: hidden;
}

.note-block {
    width: 10vw;
    height: 10vw;
    margin-right: 1vw;
    background-color: skyblue;
    position: absolute;
}

.staff {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    pointer-events: none;
}

.staff-line {
    border-top: 1px solid black;
    height: 14.3%;
}

.keyboard {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 5vw;
}

.key {
    width: 10vw;
    height: 15vh;
    margin: 1vw;
    background-color: white;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 4vw;
}

@media (max-width: 768px) {
    .title {
        font-size: 8vw;
    }
    .note-block {
        width: 10vw;
        height: 10vw;
    }
    .key {
        width: 12vw;
        height: 12vh;
        font-size: 5vw;
    }
    .notes-display {
        width: 95vw;
        height: 35vh;
    }
}
