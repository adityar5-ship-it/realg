import { BarChart } from "@mui/x-charts/BarChart";
import { aiModels } from "@/mock-data/index";

const BAR_WIDTH = 60;

const getColorForColorMap = (activeCategory) => {
  if (activeCategory === "model") {
    return ["#0061ff", "#47caff"] as const;
  }
  if (activeCategory === "framework") {
    return ["#ffa585", "#ffb97b"] as const;
  }
  if (activeCategory === "open-arena") {
    return ["#42047e", "#6c49c6"] as const;
  }
  return ["#0061ff", "#47caff"] as const;
};

export default function LeaderboardChart({ activeCategory }) {
  const leaderboardData = aiModels
    .filter((data) => {
      return data.tag && data.tag.some((t) => t === activeCategory);
    })
    .sort((a, b) => b.successRate - a.successRate);

  return (
    <div className="background-['F6F4EE'] ">
      <BarChart
        layout="horizontal"
        height={leaderboardData.length * BAR_WIDTH}
        dataset={leaderboardData}
        yAxis={[
          {
            scaleType: "band",
            dataKey: "name",
            tickPlacement: "extremities",
            tickLabelPlacement: "middle",
            categoryGapRatio: 0.3,
            width: 160,
            tickLabelStyle: {
              fontWeight: 800, // or "bold",
              fontSize: 12,
            },
          },
        ]}
        grid={{ vertical: true }}
        xAxis={[
          {
            valueFormatter: (v) => `${v}%`,
            tickNumber: 10,
            tickLabelStyle: {
              fontWeight: 800, // or "bold"
              fontSize: 12,
            },
            colorMap: {
              type: "continuous",
              min: 0,
              max: 100,
              color: getColorForColorMap(activeCategory),
            },
          },
        ]}
        series={[
          {
            dataKey: "successRate",
            valueFormatter: (v) => `${v}%`,
            color: "#42BFFF",
          },
        ]}
      />
      <div className="mt-8 font-sans w-full flex justify-center">
        Click into a model to see more details about its performance.
      </div>
    </div>
  );
}
