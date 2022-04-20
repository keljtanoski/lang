<?php

namespace Tests\Development;

use DragonCode\PrettyArray\Services\File as Pretty;

class PhpTest extends TestCase
{
    public function testPhp(): void
    {
        foreach ($this->files('.php') as $filename) {
            $source = $this->source($filename);

            foreach ($this->locales() as $locale) {
                $filename = $this->resolveFilename($filename, $locale);

                $path = $this->target_path . '/' . $locale . '/' . $filename;

                $target = $this->load($path);

                $this->assertSame(array_keys($source), array_keys($target), $this->messageForLocale($path, $locale));

                if ($this->isInline($filename)) {
                    $this->assertDoesntSee($path, [':attribute', ':Attribute']);
                }
            }
        }
    }

    protected function load(string $path): array
    {
        $items = Pretty::make()->load($path);

        return $this->correctValues($items);
    }
}
