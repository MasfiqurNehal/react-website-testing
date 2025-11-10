// export default function Todo({ task, isDone }) {
//     if (isDone) {
//         return <li>Successfully Complete..: {task}</li>
//     }
//     else {
//         return <li>Please Work on: {task}</li>
//     }
// }

// export default function Todo({ task, isDone }) {
//     return (
//         <div>
//             <li>
//                 {isDone ? 'Successfully Finished' : 'Work on'} : {task}
//             </li>
//         </div>

//     )

// }

export default function Todo({ task, isDone }) {
    let listIteam;
    if (isDone) {
        listIteam = <li>Finished: {task}</li>
    }
    else {
        listIteam = <li>Work on: {task}</li>
    }
    return listIteam;
}