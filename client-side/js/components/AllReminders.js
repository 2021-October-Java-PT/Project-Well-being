import Reminders from "./Reminders";

export default function AllReminders(reminders) {
    return `
    <div class="api-page-container">
    <div class="styling_container">
    <div class="reminder-header">
        <h1>Reminders</h1>
    </div>
    <div class-"all-reminders__div>
        ${Reminders(reminders)}
    </div>
    <h2 class="calendar">March 2022</h2>
    <br>
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
                <label class="entrReminder">Enter a Reminder:</label>
                <input type="text" class="add-reminder__name" placeholder="Enter Name">
                <input type="text" class="add-reminder__description" placeholder="Enter Description">
                <select name="Category" id="category" class= "add-reminder__category">
                <option value="None">Select a category</option>
                <option value="Meals">Meals</option>
                <option value="Family">Family</option>
                <option value="Financial">Financial</option>
                <option value="Transportation">Transportation</option>
                <option value="Personal">Personal</option>
                <option value="Health">Health</option>
                <option value="Shopping">Shopping</option>
                <option value="Other">Other</option>
                </select>
                <select name="Priority" id="priority" class= "add-reminder__priority">
                <option value="None">Select a priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
                <option value="None">None</option>
                </select>
                <div class="btn add-reminder__submit">SUBMIT</div>
            </form>
    </div>
    </div>
    </div>
    </div>
    `;
}