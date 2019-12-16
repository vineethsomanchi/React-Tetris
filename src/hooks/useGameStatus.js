import { useState, useEffect, useCallback } from 'react';

export const useGameStatus = (rowsCleared) => {
    const [score, setScore] = useState(0);
    const [rows, setRows] = useState(0);
    const [level, setLevel] = useState(0);

    //40 for 1 cleared row, 100 for 2 cleared rows, etc
    const points = [40, 100, 300, 1200];

    const calcScore = useCallback(() => {
        if (rowsCleared > 0) { //Calculate only if rows have been cleared    
            setScore(prev => prev + points[rowsCleared - 1] * (level + 1))
            setRows(prev => prev + rowsCleared);
        }

         
    }, [level, points, rowsCleared]);

    useEffect(() => {
        calcScore();
    }, [calcScore, rowsCleared, score])


    return [score, setScore, rows, setRows, level, setLevel];
}