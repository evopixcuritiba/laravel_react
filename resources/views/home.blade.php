@extends('layouts.admin')
@push('scripts')
    <script>
        const isSigned = true;
        const userDataFromHome = <?=Auth::user()?>
    </script>
@endpush
