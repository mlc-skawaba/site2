<?php

/**
 * Slim Framework (https://slimframework.com)
 *
 * @license https://github.com/slimphp/PHP-View/blob/3.x/LICENSE.md (MIT License)
 */

class PhpRenderer {
    /**
     * @var string
     */
    protected $templatePath;

    /**
     * @var array
     */
    protected $attributes;

    /**
     * PhpRenderer constructor.
     *
     * @param string $templatePath
     */
    public function __construct(string $templatePath = '', array $attributes = [])
    {
        $this->templatePath = rtrim($templatePath, '/\\') . '/';
        $this->attributes = $attributes;
    }

    /**
     * Renders a template and returns the result as a string
     *
     * trigger error if $templatePath . $template does not exist
     *
     * @param string $template
     * @param array $data
     *
     * @return mixed
     */
    public function fetch(string $template, array $data = [])
    {
        if(!is_file($this->templatePath . $template)) {
            throw new \InvalidArgumentException("{$template} dose not exist. ");
        }

        $data = array_merge($this->attributes, $data);
        try {
            ob_start();
            $this->protectedIncludeScope($this->templatePath . $template, $data);
            $output = ob_get_clean();
        } catch(\Exception $e) {
            ob_end_clean();
            throw $e;
        }

        return $output;
    }

    /**
     * @param string $template
     * @param array $data
     */
    protected function protectedIncludeScope ($template, array $data) {
        extract($data);
        include func_get_arg(0);
    }
}
