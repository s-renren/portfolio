import othello_pic from "@/assets/worksDetail/othelloD.png";
import minesweeper_pic from "@/assets/worksDetail/minesweeperD.png";
import discordBot_pic from "@/assets/works/discordbot.png";
import threeD_navi_pic from "@/assets/works/3dnavi.png";
import hanabi_pic from "@/assets/works/hanabi.png";

const works = [
  { title: "オセロ", image: othello_pic },
  { title: "マインスイーパー", image: minesweeper_pic },
  { title: "草チェッカー", image: discordBot_pic },
  { title: "3Dナビ", image: threeD_navi_pic },
  { title: "花火大会オンライン", image: hanabi_pic },
];

const WorksDetail = () => {
  return (
    <div className="px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Works</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {works.map((work, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <img
              src={work.image}
              alt={work.title}
              className="max-w-auto mx-auto h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{work.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorksDetail;
