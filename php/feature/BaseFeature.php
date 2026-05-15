<?php
declare(strict_types=1);

// RedTideInformation SDK base feature

class RedTideInformationBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(RedTideInformationContext $ctx, array $options): void {}
    public function PostConstruct(RedTideInformationContext $ctx): void {}
    public function PostConstructEntity(RedTideInformationContext $ctx): void {}
    public function SetData(RedTideInformationContext $ctx): void {}
    public function GetData(RedTideInformationContext $ctx): void {}
    public function GetMatch(RedTideInformationContext $ctx): void {}
    public function SetMatch(RedTideInformationContext $ctx): void {}
    public function PrePoint(RedTideInformationContext $ctx): void {}
    public function PreSpec(RedTideInformationContext $ctx): void {}
    public function PreRequest(RedTideInformationContext $ctx): void {}
    public function PreResponse(RedTideInformationContext $ctx): void {}
    public function PreResult(RedTideInformationContext $ctx): void {}
    public function PreDone(RedTideInformationContext $ctx): void {}
    public function PreUnexpected(RedTideInformationContext $ctx): void {}
}
