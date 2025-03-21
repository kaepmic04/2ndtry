import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalendarSection() {
  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi({ namespace: "30min" });
        cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
      } catch (error) {
        console.error("Error loading Cal.com:", error);
      }
    })();
  }, []);

  return (
    <section className="py-24 bg-black" id="calendar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Termin{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              vereinbaren
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Wählen Sie einen passenden Termin für unser Gespräch aus.
          </p>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
          <Cal
            namespace="30min"
            calLink="ai-rezeption/30min"
            style={{ width: "100%", minHeight: "600px", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view" }}
          />
        </div>
      </div>
    </section>
  );
}
