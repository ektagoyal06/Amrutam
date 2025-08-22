import { useState } from "react";
import AskQuestionModal from "./AskQuestionModal";

export default function Dashboard() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Add Question
      </button>

      <AskQuestionModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
