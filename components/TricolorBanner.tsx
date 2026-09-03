export default function TricolorBanner() {
  return (
    <div className="h-1 w-full overflow-hidden" aria-hidden="true">
      <div
        className="animate-tricolor h-full"
        style={{
          width: "200%",
          background:
            "linear-gradient(90deg, #002395 0%, #002395 16.67%, #FFFFFF 16.67%, #FFFFFF 33.33%, #ED2939 33.33%, #ED2939 50%, #002395 50%, #002395 66.67%, #FFFFFF 66.67%, #FFFFFF 83.33%, #ED2939 83.33%, #ED2939 100%)",
        }}
      />
    </div>
  );
}
