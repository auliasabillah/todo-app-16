import ApiTodoList from './components/ApiTodoList';
import { getTasks } from '@/lib/tasks';

export default async function ApiTodosPage() {
    const { tasks } = await getTasks();

    return (
        <main className='min-h-screen p-6 md:p-10'>
            <div className='max-w-2xl mx-auto'>
                <ApiTodoList initialTasks={tasks} />
            </div>
        </main>
    );
}