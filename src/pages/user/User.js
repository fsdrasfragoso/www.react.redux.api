import React, {Component} from "react";
class User extends Component 
{
    render()
    {
        let list = [
            {
                name: "Esdras",
                email: "esdrasfragoso@gmail.com"
            },
            {
                name: "Joice",
                email: "joice.fragoso@live.com"
            }
            

            
        ]
        return (
            <div>
                <table border="1">
                    <tr>
                        <td>
                            Name
                        </td>
                        <td>
                            Email:
                        </td>
                    </tr>
                    {list.map((item) => {
                        return <tr>                        
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.email}
                            </td>
                        </tr>
                    })}
                </table>
            </div>
        );
    }
}

export default User; 