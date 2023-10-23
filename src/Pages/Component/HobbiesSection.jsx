// Mohamed ===============
import { useEffect, useState } from "react";
import EmojiPicker from "emoji-picker-react";

const HobbiesSection = () => {
  const [showEmoji, setShowEmoji] = useState(false);
  const [activeEmojiBtn, setActiveEmojiBtn] = useState("");
  const [data, setData] = useState({
    task_1: {
      id: 1,
      emoji: "🎨",
      text: "",
    },
  });

  const btnEmojiHandler = (e) => {
    if (showEmoji && activeEmojiBtn === e.target.dataset.id) {
      setShowEmoji(false);
      setActiveEmojiBtn("");
      return;
    }

    if (showEmoji && activeEmojiBtn !== e.target.dataset.id) {
      e.preventDefault();
      return;
    }

    setShowEmoji(true);
    setActiveEmojiBtn(e.target.dataset.id);
  };

  const onEmojiClick = (event) => {
    setData({
      ...data,
      [`task_${activeEmojiBtn}`]: {
        ...data[`task_${activeEmojiBtn}`],
        emoji: event.emoji,
      },
    });
    setActiveEmojiBtn("");
    setShowEmoji(false);
  };

  const addNew = () => {
    setData({
      ...data,
      [`task_${Object.keys(data).length + 1}`]: {
        id: Object.keys(data).length + 1,
        emoji: "🎨",
        text: "",
      },
    });
  };

  const textChange = (event) => {
    setData({
      ...data,
      [`task_${event.target.dataset.id}`]: {
        ...data[`task_${event.target.dataset.id}`],
        text: event.target.value,
      },
    });
  };

  useEffect(() => {
    const showConsole = () => {
      console.log(data);
    };

    showConsole();
  }, [data]);

  return (
    <div className="bg-white p-6 rounded shadow my-10">
      <h2 className=" font-bold text-xl mb-6">Hobbies Section</h2>

      <div className="flex flex-col gap-5 relative">
        {Object.keys(data).map((k) => {
          return (
            <div
              className="flex items-center gap-2"
              key={data[k].id}
            >
              <span className="opacity-60">{data[k].id}</span>
              <div className="flex gap-2 grow">
                <button
                  onClick={btnEmojiHandler}
                  className={`bg-gray-100 hover:bg-gray-200 p-2 ${activeEmojiBtn == data[k].id &&
                      showEmoji
                      ? "bg-yellow-200"
                      : activeEmojiBtn != data[k].id &&
                        showEmoji
                        ? " opacity-30 cursor-not-allowed"
                        : ""
                    }`}
                  data-id={data[k].id}
                >
                  {data[k].emoji}
                </button>
                <input
                  type="text"
                  placeholder="Type"
                  onChange={textChange}
                  data-id={data[k].id}
                  className="bg-gray-100 border-b-2 border-gray-300 py-2 px-4 focus:outline-none focus:border-gray-400 grow"
                />
              </div>
            </div>
          );
        })}

        <button
          onClick={addNew}
          className="bg-gray-100 border-2 border-gray-200 py-2 font-bold"
        >
          Add New Hobbies
        </button>

        {showEmoji && (
          <div className="absolute -right-96 -top-32">
            <EmojiPicker onEmojiClick={onEmojiClick} />
          </div>
        )}
      </div>
    </div>
  );
};

export default HobbiesSection;