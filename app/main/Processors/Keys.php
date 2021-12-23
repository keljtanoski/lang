<?php

namespace LaravelLang\Lang\Processors;

use DragonCode\Support\Facades\Helpers\Filesystem\File;

class Keys extends Processor
{
    protected string $target_path = 'locales';

    public function run(): void
    {
        foreach ($this->locales() as $locale) {
            foreach ($this->files($locale) as $file) {
                $target_path = $this->getTargetPath($locale . '/' . $file);

                $filename = $this->isMainJson($file) ? 'en.json' : $file;

                $this->process($target_path, $filename, $locale);
            }
        }
    }

    protected function files(string $locale): array
    {
        return File::names($this->getTargetPath($locale));
    }
}
