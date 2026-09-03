import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TaskInput from "../components/TaskInput";
import TaskCard from "../components/TaskCard";
import { type TaskCardProps } from "../libs/Todolist";
import Footer from "../components/Footer";

export default function TodolistPage() {
  const title  = "Todo List";

  const tasks: TaskCardProps[] = [
  {
    id: "1",
    title: "Read a book",
    description: "Vite + React + Bootstrap + TS",
    isDone: false,
  },
  {
    id: "2",
    title: "Write code",
    description: "Finish project for class",
    isDone: false,
  },
  {
    id: "3",
    title: "Deploy app",
    description: "Push project to GitHub Pages",
    isDone: false,
  },
];
  return (
    <div className="container-fluid min-vh-100">
      <div className="row h-100">
        {/* ── 2) Sidebar (รับ props userName, type) ─────────────────────────── */}
        <Sidebar userName="Methas" type="student" />

        <div className="col-10 p-0 d-flex flex-column min-vh-100">
          {/* ── 1) Header (ไม่รับ props) ────────────────────────────────────── */}
          <Header/>

          <main className="flex-grow-1 p-4">
            <div className="container">
              <h2 className="text-center">{title}</h2>
              <p className="text-center">ทั้งหมด {tasks.length} งาน</p>

              {/* ── 3) TaskInput (ไม่รับ props) ──────────────────────────── */}
             <TaskInput/>

              {/* ── 4) Task (3 แถว) → แยกเป็น <TaskCard /> แล้ว .map() ─────── */}
           {
            tasks.map((t) => ( // map loop เข้าถึง property in tasks
               <TaskCard
                    key={t.id} //ค่า key ต้องเลขสักอย่างที่ไม่ซ้ำ
                    id={t.id}
                    title={t.title}
                    description={t.description}
                    isDone={t.isDone}
                  />
            ))
           }

           </div>
          </main>

          {/* ── 5) Footer (รับ props year, fullName, studentId) ─────────────── */}
          <Footer year="2026" fullName="Methas Naisoo" studentId="680610708"></Footer>

        </div>
      </div>
    </div>
  );
}
