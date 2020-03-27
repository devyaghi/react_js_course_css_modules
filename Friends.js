import React from "react";
import friends_style from './friends.module.css';

export default class Friends extends React.Component{

    render() {
        return (
            <table className={friends_style.tablefriends}>
                <thead>
                  <tr>
                   <th>ID</th><th>Name</th>
                  </tr>
                </thead>
                <tbody>
                   <tr>
                       <td>1</td>
                       <td>Mohammed</td>
                   </tr>
                   <tr>
                       <td>2</td>
                       <td>Ali</td>
                   </tr>
                   <tr>
                       <td>3</td>
                       <td>Khalid</td>
                   </tr>
                </tbody>
            </table>
        )
    }


}