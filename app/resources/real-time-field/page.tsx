import { ResourcePreview } from "../../../components/resources/resources-preview"
import { realTimeFieldData } from "@/data/resources"

export default function RealTimeFieldPage() {
  return <ResourcePreview resource={realTimeFieldData} />
}