# Todo React Project (SonarQube Practice)

Simple ReactJS todo app with:
- Add task
- View pending tasks
- Delete task
- Mark task as done
- Completed tasks shown in a separate list

## Run

```bash
npm install
npm run dev
```

## Intentional Issues Included

This project intentionally includes exactly 7 issues for manual fixing with SonarQube.

### Bugs (4)
1. `BUG-1` in `src/components/TodoForm.jsx`: invalid input validation allows empty task creation.
2. `BUG-2` in `src/components/TodoList.jsx`: unstable list key uses array index.
3. `BUG-3` in `src/App.jsx`: task id generation can create duplicates.
4. `BUG-4` in `src/App.jsx`: delete logic compares against array index instead of task id.

### Vulnerabilities (3)
1. `VULN-1` in `src/components/TaskItem.jsx`: unsanitized `dangerouslySetInnerHTML` usage.
2. `VULN-2` in `src/App.jsx`: dynamic execution using `eval`.
3. `VULN-3` in `src/App.jsx`: untrusted open redirect via user-provided URL.
