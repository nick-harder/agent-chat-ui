import { useArtifact } from "../../thread/artifact";

export interface PlotHTMLProps {
  src: string; // Path or URL to the HTML file
}

export function PlotHTML(props: PlotHTMLProps) {
  const [Artifact, { open, setOpen }] = useArtifact();

  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className="border p-4 rounded-lg cursor-pointer bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 shadow hover:shadow-lg transition w-full max-w-xl mb-2"
      >
        <div className="flex items-center justify-between mb-2">
        </div>
        {/* Small preview */}
        <div className="mx-auto overflow-hidden rounded-md border mb-2 bg-white flex items-center justify-center"
          style={{ width: 512, height: 512 }}>
          <iframe
            src={props.src}
            width="100%"
            height="100%"
            style={{
              border: "none",
              pointerEvents: "none",
              background: "#fff",
              display: "block",
              objectFit: "contain",
            }}
            tabIndex={-1}
          />
        </div>
        <p className="text-xs text-gray-400">Click to view interactive plot</p>
      </div>
      <Artifact title={"Plot"}>
        <div className="relative w-full h-full p-0">
          <iframe
            src={props.src}
            width="100%"
            height="400"
            style={{
              border: "none",
              borderRadius: "0.75rem",
              background: "#fff",
              boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
            }}
            allowFullScreen
          />
        </div>
      </Artifact>
    </>
  );
}

export default PlotHTML;