<?php

namespace Tests\Development;

use DragonCode\PrettyArray\Services\File as Pretty;

class JsonTest extends TestCase
{
    public function testJson(): void
    {
        foreach ($this->files('.json') as $filename) {
            $source = $this->source($filename);

            foreach ($this->locales() as $locale) {
                $filename = $this->resolveFilename($filename, $locale);

                $path = $this->target_path . '/' . $locale . '/' . $filename;

                $target = $this->load($path);

                $this->assertSame(array_keys($source), array_keys($target), $this->messageForPath($path));
            }
        }
    }

    protected function load(string $path): array
    {
        $content = Pretty::make()->loadRaw($path);

        $items = json_decode($content, true);

        return $this->correctValues($items);
    }

    protected function resolveFilename(string $filename, string $locale = null): string
    {
        return $this->isMainJson($filename) && ! empty($locale) ? $locale . '.json' : $filename;
    }
}
