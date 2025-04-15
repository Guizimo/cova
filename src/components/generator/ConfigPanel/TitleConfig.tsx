import { Textarea } from '@/components/ui/textarea';
import { useGeneratorStore } from '@/store/generator';

export function TitleConfig() {
  const { title, setTitle } = useGeneratorStore();

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-base font-medium">标题</h3>
        <Textarea
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="输入标题，支持换行"
          className="min-h-[60px] resize-y"
        />
      </div>
    </div>
  );
}
