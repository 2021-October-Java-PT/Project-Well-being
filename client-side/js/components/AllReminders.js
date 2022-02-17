export default function AllReminders(reminders) {
    return `
    <div class="api-page-container">
    <div class="reminder-header">
    <h1>Reminders</h1>
    </div>
    <ul class="all-reminders__list>
    ${reminders.map(reminder => {
    return `
    <li class="reminder">${reminder.name}
        <input type='hidden' id="reminder-id" value="${reminder.id}"/>
        </li>
        `;
    }).join('')}
    </ul>
    <h2 class="calendar">
    March 2022
    </h2>
<br />
<table class="calendar">
    <thead>
        <tr>
            <th class="calendar">
                Sun</th>
            <th class="calendar">
                Mon</th>
            <th class="calendar">
                Tue</th>
            <th class="calendar">
                Wed</th>
            <th class="calendar">
                Thu</th>
            <th class="calendar">
                Fri</th>
            <th class="calendar">
                Sat</th>
        </tr>
    </thead>
    <tbody>
        <tr class="calendar">
            <td></td>
            <td></td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
        </tr>
        <tr class="calendar">
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
        </tr>
        <tr class="calendar">
            <td>13</td>
            <td>14</td>
            <td>15</td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td>19</td>
        </tr>
        <tr class="calendar">
            <td>20</td>
            <td>21</td>
            <td>22</td>
            <td>23</td>
            <td>24</td>
            <td>25</td>
            <td>26</td>
        </tr>
        <tr class="calendar">
            <td>27</td>
            <td>28</td>
            <td>29</td>
            <td>30</td>
            <td>31</td>
            <td>1</td>
            <td>2</td>
        </tr>
        <tr class="calendar">
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
        </tr>
    </tbody>
</table>
    </div>
    <div class="">
    <div class="">
        <div class=""></div>
            <form id="frmReminder"">
                <label>Enter a Reminder</label>
                <input type="text" class="add-reminder__name" placeholder="Enter Name">
                <input type="text" class="add-reminder__category" placeholder="Enter Category">
                <input type="text" class="add-reminder__priority" placeholder="Enter Priority">
                <input type="text" class="add-reminder__description" placeholder="Enter Description">
                <button type="submit" class="add-reminder__submit">SUBMIT</button>
            </form>
    </div>
    </div>  
    `;
}