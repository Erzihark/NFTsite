import React, {Fragment} from "react"

export default  function Clock ({timerDays, timerHours, timerMinutes, timerSeconds}) {

    return(
        <Fragment>
            <div className="clock">
                <section>
                    <p>{timerDays}</p>
                    <small>Days</small>
                </section>
                <span>:</span>
                <section>
                    <p>{timerHours}</p>
                    <small>Hours</small>
                </section>{" "}
                <span>:</span>
                <section>
                    <p>{timerMinutes}</p>
                    <small>Minutes</small>
                </section>{" "}
                <span>:</span>
                <section>
                    <p>{timerSeconds}</p>
                    <small>Seconds</small>
                </section>
            </div>
        </Fragment>
    )
}