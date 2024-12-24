interface TotalExercises {
    totalExercises: number
}

const Total = ({ totalExercises }: TotalExercises) => {
    return (
        <>
            <p>
                Number of exercises {totalExercises}
            </p>
        </>
    )
}

export default Total;