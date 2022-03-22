import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

export function Counter(): JSX.Element {
    const [score, setScore] = useState<number>(0);

    function increaseScore() {
        setScore(score + 1);
    }

    return (
        <div>
            <div>{score}</div>
            <Button onClick={increaseScore}>Increase</Button>
        </div>
    );
}
