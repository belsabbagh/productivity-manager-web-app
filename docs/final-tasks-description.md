# Final Tasks Description

## Front-end

### UI Fixes

- Users and employees index pages should have inner navigation between one another.
- Select components find a way to save and return selected items for further use in forms.
- ```teams.create``` and ```teams.edit``` pages should reactively display of expected utilization for an employee.
- Success and error messages should be displayed (requires synchronization with back-end controller responses).
- More fixes may be necessary depending on HCI requirements.

### Front-end Form Handling

- Create and Edit pages collect data from form attributes to send through the `handleSubmit` function.
- Using Inertia's ```useForm``` hook, form data is collected.
- Form data should be formatted correctly to be posted.
- <https://inertiajs.com/forms>
- <https://adocasts.com/lessons/introducing-forms-and-the-inertia-form-helper>

<div style="page-break-after: always"></div>

## Back-end

### Models

- The backend that handles the resource management of an employee's assignment on a project as part of a team.

### Back-end Form Handling

#### Authorization

- Defining the authorization rules for each request type per resource.
- <https://laravel.com/docs/9.x/validation#authorizing-form-requests>
- <https://laravel.com/docs/9.x/authorization>

#### Validation

- Defining the form structure that should be validated for each request type per resource.
- <https://laravel.com/docs/9.x/validation>

#### Execution

- Using the controller to run the database model to insert, update, or destroy a record in the database.
- <https://laravel.com/docs/9.x/eloquent#inserting-and-updating-models>

#### Responding

- Response/error handling when running the queries.
